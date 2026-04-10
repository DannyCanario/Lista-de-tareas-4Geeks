 listaTareas = []
 
 Function agregarTarea (){
    let nuevatarea = promt ("ingresar nueva tarea: ");
        listaTarea.push (nueva tarea);
        console.log("Tarea agendada: " + nuevatarea); // imprime confirmación de la tarea
 }

 // mostrar lista de tarea
 function mostrarTarea (){
    console.log("lista de tareas:");
    for (let i = 0; i <listaTarea.length; i++){ // -for- para recorrer el array de las listas
        console.log(i + 1 + ". " + listaTarea[i]); // imprime tarea por tarea
    }
 }

 // borrar tareas

 function borrarTarea(){
    lit indiceTarea = parseInt(prompt(Ingresar el número de tarea a eliminar"))
        listaTareas.splice(indiceTarea-1, 1); // eliminamos la tarea que indiquemos
        console.log("Tarea eliminada");
        console.log.apply(listaTareas); //imprime lista final
 }

 