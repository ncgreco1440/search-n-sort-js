const Contact = require('./contact');


describe('Contact', () => {

  test('Contact should exist', () => {
    const contact = new Contact();
  
    expect(contact).toBeTruthy();
  });

  test('should be created with firstName, lastName, and phone equal to null', () => {
    const contact = new Contact();

    expect(contact.firstName).toBe(null);
    expect(contact.lastName).toBe(null);
    expect(contact.phone).toBe(null);
  });

  test('should be created with a non-null firstName, lastName, and phone', () => {
    const contact = new Contact('Nico', 'Greco', '555-555-5555');

    expect(contact.firstName).toEqual('Nico');
    expect(contact.lastName).toEqual('Greco');
    expect(contact.phone).toBe('555-555-5555');
  });

  test('should implement a toString function', () => {
    const contact = new Contact('Nico', 'Greco', '555-555-5555');

    expect(contact.toString()).toEqual(`Greco, Nico\t555-555-5555`);
  });

  test('should implement a compareTo function', () => {
    const contact1 = new Contact('Nico', 'Greco', '555-555-5555');
    const contact2 = new Contact('Josephine', 'Gonzalez', '333-333-3333');

    expect(contact1.compareTo(contact2)).toBe(1);
  });

});
