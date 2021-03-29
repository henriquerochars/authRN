export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: '45das4das46das5d4as655sf4as54as6as',
        user: {
          name: 'Henrique',
          email: 'henrique@gmail.com',
        },
      });
    }, 2000);
  });
}
