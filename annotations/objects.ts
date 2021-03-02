const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 2,
    lng: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
