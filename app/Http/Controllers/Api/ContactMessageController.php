<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

use App\Mail\ContactMail;


class ContactMessageController extends Controller
{
    public function send(Request $request){
        $data = $request->all();

        $validator = Validator::make($data, [
            'email' => 'required|email',
            'message' => 'required'
        ],
        [
            'email.required' => "L' email è obbligatoria",
            'email.email' => "Inserisci un'email valida",
            'message.required' => "Inserisci il testo per inviare la mail",
        ]

    );

    if($validator->fails()){
        return response()->json([ 'errors' => $validator->errors() ]);
    }

    $mail = new ContactMail($data);

    Mail::to( env('MAIL_ADMIN') )->send($mail);

    return response('Mail inviata', 204);
    }
}
