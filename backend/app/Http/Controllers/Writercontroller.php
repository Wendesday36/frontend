<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Http\Request;

class Writercontroller extends Controller
{
    //
    public function index(){
        $writers = Writer::all();
        return response()->json($writers);

    }
    public function store(Request $request){
        $record = new Writer();
        $record->nev = $request->nev;
        $record->szul = $request->szul;
        $record->save();

        return Writer::find($record->id);
    }
    public function destroy($id){
        $writer = Writer:: find($id)->delete();
        return response()->json(['message'=>'Sikeres törlés!',201]);
       // return redirect('/book/list');
    }
    public function update(Request $request,$id){
        $writer =  Writer:: find($id);
        $writer ->nev = $request->nev;
        $writer ->szul = $request->szul;
       // $book ->pieces = $request->pieces;
        $writer->save();
        return redirect('/writers');
    }
}


