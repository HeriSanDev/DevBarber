<?php

namespace App\Http\Controllers\Api;

use App\Models\Barber;
use App\Models\Testimonial;
use App\Models\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BarberController extends Controller
{
    private $barber;

    public function __construct(Barber $barber)
    {
        $this->barber = $barber;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $barbers = $this->barber->all();


        return response()->json($barbers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  Barber $barber
     * @return \Illuminate\Http\Response
     */
    public function show(Barber $barber)
    {
       return response()->json($this->ajust($barber));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $name
     * @return \Illuminate\Http\Response
     */
    public function showByName($name)
    {
        $barbers = Barber::where('name', 'like', "%$name%")->get();
        return response()->json($barbers);
    }

    public function ajust($barber){

        //$client = auth()->user()->clients()->first();
        $favorited = false;

        $favorites = auth()->user()->clients()->first()->favorites()->get();
        foreach($favorites as $favorite){
            if ($favorite->id==$barber->id){
                $favorited = true;
            }
        }

        $testimonials = $barber->testimonials()->get();
        $testimonials2 = array();
        foreach($testimonials as $testimonial){
        $id = $testimonial->client_id;
        $tes=json_decode($testimonials[0], true);
        $tes['name'] = Client::findOrFail($id)->name;
        ksort($tes);
        $testimonials2[]=$tes;
        }
        $barber2 = json_decode($barber, true);
        $barber2 = array_diff_key($barber2,["distance"=>'xy']);
        $barber2['favorited'] = $favorited;
        $barber2['testimonials'] = $testimonials2;
        $barber2['services'] = $barber->services()->get();
        $barber2['availables'] = $barber->availables()->get();

        ksort($barber2);

        return $barber2;

    }

}
