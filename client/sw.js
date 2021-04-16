self.addEventListener('push', (e) => {
  const data = e.data.json();
  console.log(data);

  self.registration.showNotification(data.title);
});
