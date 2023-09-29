function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

asincrona((e, dato) => {
  if (e) {
    console.error('tenemos un error');
    console.error(e);
    return false;
  }
  console.log('todos nada bien', e);
});
