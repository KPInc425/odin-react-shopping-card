import './App.css';

function App() {
  return (
    <div className="App">
      <div className="titleWrapper">
        <h1 className='insetText'>Welcome to iLGaming Merch Shop</h1>
      </div>
      <br />
      <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="" />
      <div className='homepageText'>
        <p>
          The Hub of all things capital when it comes to iLG! 
          Get your thingy-bob, and the coveted (insert valuable here)! 
          Anything you are looking for related to iLG and Merch, you can find 
          somewhere! Possibly even here!
        </p>
        <p>
          Did you need a gift for your favorite ghost? Or perhaps a new High 
          Quality Diamond Ring, exclusive to iLG for only $9.99, it may even 
          be REAL!
        </p>
        <p>
          Come on in and find that (insert witty product reference here) that
          you have always wanted, or that your goldfish has been bugging you
          for? I am pretty sure your favorite Teacher could use a new (expensive 
          tech product on shop page) and they definitely deserve it!
        </p>
        <p>
          Whatever your needs are, even just some words of encouragement; You 
          can definitely do it! You will find it at iLGaming's Shop of products
          likely too good to be true! We can't wait to fullfill your purchasing
          needs.
        </p>
      </div>
    </div>
  );
}

export default App;
