const profile = {
  userName: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};
// const {age}: number = profile; // wrong
const {age, userName}: {age: number, userName: string} = profile;
const {coords: {lat, lng}}: {coords: {lat: number;  lng: number}} = profile;
