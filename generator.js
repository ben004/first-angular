function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen = generator(10);
  
  console.log(gen.next().value);

  console.log(gen.next().value);


  function* generator2() {
      console.log("before first yeild")
    yield "first yeild";
    console.log("after first yeild")
    yield "second yeild";
  }

  const gen1=generator2();
    
  console.log(gen1.next())
  console.log(gen1.next())
  console.log(gen1.next())