const Contact = require('./contact');
const SelectionSort = require('./selection-sort');

describe('SelectionSort', () => {

  const contacts = [
    new Contact('Nico', 'Greco', '555-555-5555'),
    new Contact('Josh', 'Davidson', '111-111-1111'),
    new Contact('Josephine', 'Johnson', '222-222-2222'),
    new Contact('John', 'Smith', '999-999-9999'),
    new Contact('Alexa', 'Franklin', '888-888-8888'),
    new Contact('Barbara', 'Hickinsons', '444-444-4444')
  ];

  test('should sort a given array of contacts', () => {
    SelectionSort(contacts);

    expect(contacts[0].lastName).toEqual('Davidson');
    expect(contacts[1].lastName).toEqual('Franklin');
    expect(contacts[2].lastName).toEqual('Greco');
    expect(contacts[3].lastName).toEqual('Hickinsons');
    expect(contacts[4].lastName).toEqual('Johnson');
    expect(contacts[5].lastName).toEqual('Smith');
  });

});