<?php

namespace App\Http\Controllers\Api;

use App\Models\Barber;
use App\Models\Client;
use App\Models\Agend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AgendController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $availables = Barber:: where('id', $request->barber_id)->first()->availables()->get();
        $availables = $availables->where('date','like',$request->date)->first();

           if($availables->count() > 0 && $availables->disponivel != 0){
                $hours=$availables->hours;
                $hours=array_diff($hours, [$request->hour]);
                foreach($hours as $hour){

                    $hours2[]=$hour;
                }
                $availables->update(['hours' => $hours2]);
           }else{
            return response()->json(['status' => 'Horario não disponivel']);
           }


        $agends = Barber::where('id', $request->barber_id)->first()->agends()->get();
        $agends=$agends->where('date','like',$request->date);
        $agends=$agends->where('hour','like',$request->hour);
        if($agends->count() > 0){
            return response()->json(['status' => 'Horario não disponivel']);
        }
        $agends = Client::where('id', auth()->user()->clients()->first()->id)->first()->agends()->get();
        $agends=$agends->where('date','like',$request->date);
        $agends=$agends->where('hour','like',$request->hour);
        if($agends->count() > 0){
            return response()->json(['status' => 'Você ja tem um serviço agendado nesta data e horario']);
        }
        if($agends->count() <= 0){
            $agend = new Agend;
            $agend->client_id = auth()->user()->clients()->first()->id;
            $agend->barber_id = $request->barber_id;
            $agend->date = $request->date;
            $agend->hour = $request->hour;
            $agend->status = 'pendente';
            $agend->save();



        }



        return $agend;
        //$availables->where('hour','like',$request->hour);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
}
