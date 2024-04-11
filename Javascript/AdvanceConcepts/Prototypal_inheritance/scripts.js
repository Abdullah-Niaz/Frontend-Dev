function add(name,age){
    this.name = name;
    this.age = age ;
    this.printMyName = function(){
        console.log(this.name);
    }

}

const a = new add("AB",20);
a.printMyName();
const b = new add("BC",20);
b.printMyName();