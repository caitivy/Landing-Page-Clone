
    const mins = document.querySelector('.minute');
    const hour = document.querySelector('.hours');


    function setDate(){
      const now = new Date();


      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + 90;


      const hour = now.getHours();
      const hourDegrees = ((mins / 12) * 360) + 90;

    }
    setInterval(setDate, 100);  //to set a time interval with the parameter as the setDate variable and 1000 seconds
