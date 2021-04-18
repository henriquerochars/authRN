export interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    // to simulate login
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
