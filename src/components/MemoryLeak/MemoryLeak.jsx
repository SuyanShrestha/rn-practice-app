import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
const MemoryLeak = () => {
  function createClosure() {
    let largeObject = {
      /* large data */
      name: 'Suyan',
      age: 21,
      city: 'KTM',
    };

    function innerFunction() {
      console.log(largeObject);
    }

    return innerFunction;
  }

  let closure = createClosure();
  // `largeObject` is still accessible through `closure`

  // ----------------------------------------------------------------

  // EXAMPLES OF CLEANUP FUNCTIONS
  // unsubscribe from events
  //   this window not available in react native
  //   useEffect(() => {
  //     const handleResize = () => console.log('Window resized');
  //     window.addEventListener('resize', handleResize);

  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);

  // clearing timers
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer running');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <View>
      <Text>MemoryLeak Examples are present in code but not the demo</Text>
    </View>
  );
};

export default MemoryLeak;
