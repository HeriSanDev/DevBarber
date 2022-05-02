<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Barber;
use App\Models\User;

use Illuminate\Database\Seeder;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $user1 = User::create([
            'name'           => 'Ademir Ribeiro',
            'email'          => 'admrb@gmail.com',
            'password'       =>  bcrypt('123456'),
        ]);
        $client1 = Client::create([
            'user_id'        => $user1->id,
            'user'           => 'AdemirRib',
            'avatar'         => "https://i.ibb.co/m4N5g5M/732282758-full-stacker.jg",
            'name'           => 'Ademir Ribeiro',
            'cell'           => '15 996633485',
            'latitude'       => '-23.5530907',
            'longitude'      => '-46.6896907',
            'distance'        => '0.6910000000'

        ]);


        $user2 = User::create([
            'name'           => 'João Roberto',
            'email'          => 'jorob@gmail.com',
            'password'       =>  bcrypt('123456'),
        ]);

        $client2 = Client::create([
            'user_id'        => $user2->id,
            'user'           => 'JoRob',
            'avatar'         => "https://i.ibb.co/m4N5g5M/732282758-full-stacker.jg",
            'name'           => 'João Roberto',
            'cell'           => '15 996478315',
            'latitude'       => '-53.5530907',
            'longitude'      => '-49.6896907',
            'distance'        => '1.8970000000'

        ]);

        $user3 = User::create([
            'name'           => 'ClaudioGomes',
            'email'          => 'claugo@gmail.com',
            'password'       =>  bcrypt('123456'),
        ]);

        $barber = Barber::create([
            'user_id'        => $user3->id,
            'user'           => 'ClaudioGo',
            'avatar'         => "https://i.ibb.co/m4N5g5M/732282758-full-stacker.jg",
            'name'           => 'ClaudioGomes',
            'cell'           => '15 998567390',
            'latitude'       => '-53.5530907',
            'longitude'      => '-49.6896907',
            'distance'        => '1.8970000000',
            'photos'         => [
                [
                   "id"=>1,
                   "url"=>"https=>//ibb.co/8KdDNXw"
                ],
                [
                   "id"=>2,
                   "url"=>"https=>//ibb.co/yV9KTVW"
                ],
                [
                   "id"=>3,
                   "url"=>"https=>//ibb.co/1fdFBWs"
                ],
                [
                   "id"=>4,
                   "url"=>"https=>//ibb.co/8gf55Bh"
                ],
                [
                   "id"=>5,
                   "url"=>"https=>//ibb.co/qkmzqsV"
                ]
             ],
            'stars'          => 4.0
        ]);

        $barber->services()->create([
            'name'          => 'Corte de Cabelo',
            'description'   => 'corte seu cabelo e matenha seu estilo',
            'price'         => 39.90
        ]);

        $barber->services()->create([
            'name'          => 'Aparação de Barba',
            'description'   => 'Mantenha sua barba aparada',
            'price'         => 29.90
        ]);
        $barber->services()->create([
            'name'          => 'Lavagem Cabelo e Barba',
            'description'   => 'Matenha o cabelo cheiroso e hidratado',
            'price'         => 19.90
        ]);
        $barber->services()->create([
            'name'          => 'Raspagem da Cabeça',
            'description'   => 'Limpe sua cabeça e começe do zero',
            'price'         => 17.90
        ]);
        $barber->services()->create([
            'name'          => 'Desenho com Gilete',
            'description'   => 'Personalize seu cabelo com desenhos estilosos',
            'price'         => 14.90
        ]);
        $barber->availables()->create([
            'date'          => '2022-04-27',
            'hours'         => ['08:30','09:30','10:30','11:30','14:00','15:00','16:00','17:00'],
            'disponivel'    => '1'
        ]);
        $barber->availables()->create([
            'date'          => '2022-04-29',
            'hours'         => ['08:30','14:00','15:00','17:00'],
            'disponivel'    => '1'
        ]);
        $barber->availables()->create([
            'date'          => '2022-04-30',
            'hours'         => ['14:00','15:00','16:00','17:00'],
            'disponivel'    => '1'
        ]);
        $barber->availables()->create([
            'date'          => '2022-05-03',
            'hours'         => ['08:30','09:30','11:30','14:00','15:00','16:00','17:00'],
            'disponivel'    => '1'
        ]);
        $barber->availables()->create([
            'date'          => '2022-05-04',
            'hours'         => ['08:30','09:30','10:30','11:30','14:00','15:00','16:00','17:00'],
            'disponivel'    => '1'
        ]);
        $barber->availables()->create([
            'date'          => '2022-05-05',
            'hours'         => ['08:00','09:00','10:30','11:30','14:00','15:00','16:00','17:00'],
            'disponivel'    => '1'
        ]);

        $client1->favorites()->attach($barber->id);

        $client1->agends()->create([
            'barber_id'        => $barber->id,
            'date'             => '2022-04-16',
            'hour'             => '14:00',
            'status'           => 'pendente'
        ]);
        $client2->agends()->create([
            'barber_id'        => $barber->id,
            'date'             => '2022-04-20',
            'hour'             => '11:00',
            'status'           => 'pendente'
        ]);
        $agend = $client1->agends()->create([
            'barber_id'        => $barber->id,
            'date'             => '2022-04-05',
            'hour'             => '10:00',
            'status'           => 'finalizado'
        ]);
        $client1->testimonials()->create([
            'barber_id'        => $barber->id,
            'agend_id'         => $agend->id,
            'body'             => 'Muito bom o serviço aprovado',
            'stars'            =>  5.0
        ]);


    }
}
