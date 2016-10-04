/*function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Saratov', function(err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 2000);
  });
}

getTempPromise('Saratov').then(function(temp) {
  console.log('success', temp);
}, function (err) {
  console.log('error', err);
});
*/
function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      reject('Arguments must be a number');
    } else {
      resolve(a + b);
    }    
  });
}

addPromise('2',6).then(
  function(result) {
    console.log('Result is: ' + result);
  },
  function(err) {
    console.error('Error: ', err);
  });
