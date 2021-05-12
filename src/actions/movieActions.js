export const DELETE_MOVIE = "DELETE_MOVIE";

export const deleteMovie = (id)=>{
    console.log("stuff");
    return({type: DELETE_MOVIE, payload:id});
}