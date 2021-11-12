<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
class EventController extends Controller
{
    //
    function addEvents(Request $req){
        $event= new Event;     //Instance creasted of backend event
        $event->name=$req->input('name');  //we are getting the input from request and storing in backend tble right->frontend left->backend
        $event->description=$req->input('description'); 
        $event->form_link=$req->input('form_link');
        $event->pdf_link=$req->input('pdf_link');
        $event->category=$req->input('category');
        $event->tags=$req->input('tags');
        $event->image_path=$req->file('image')->store('events');
        $event->save();
    }
    function list(){
        return Event::all();
    }
    function delete($id){
        $result=Event::where('id',$id)->delete();
        if($result){
            return ["result"=>"product has been deleted"];
        }
        else{
            return ["result"=>"Operation failed"];
        }
    }
}
