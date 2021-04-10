class Person {
  name: string;

  constructor (name: string) {
    this.name = name;
  }

  getName () {
    return this.name;
  }
}

const newPerson = new Person('Hip');

console.log('newPerson', newPerson);
