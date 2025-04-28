function identity (args ) :number{
    return args;
}

//if i have to return string and args is also string then i have to redefine another function
// this is here generics is useful

function identity2<Type>(arg: Type): Type {
    return arg;
  }

  let output = identity2<string>("myString");
  console.log(output);

  let output2=identity2<number>(10);
  console.log(output2);


  function getSearchProducts<T>(product :T[]) : T{
    //operations
    return product[0];
  }

  const getSearchProducts2 =<T>(product :T[]) : T =>{
    //operations
    return product[1];
  }

  function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }

  //let displayArray=loggingIdentity<number>([1,2,3,4,5]);
  console.log(loggingIdentity([1,2,3,4,5]));


  // generic class 

  interface Quiz {
    name :string;
    type : string;
  }

  interface Course {
    name : string;
    subject : string;
  }

  class SellCourse <T> {
    public cart : T [] = [];

    addToCart(product : T){
        this.cart.push(product);
    }
    displayCart(){
        console.log(this.cart);
    }

  }

  const course1 : Course = {
    name :"ts",
    subject :" ts sub"
  }

  const course2 : Course = {
    name :"js",
    subject :" js sub"
  }

  const quiz :Quiz ={
    name :"Quiz1",
    type : "Ts"
  }

  const sc = new SellCourse<Course>();
  const quizSC=new SellCourse<Quiz>();

  sc.addToCart(course1);
  sc.addToCart(course2);
  quizSC.addToCart(quiz);

  sc.displayCart();
  //quizSC.displayCart();




