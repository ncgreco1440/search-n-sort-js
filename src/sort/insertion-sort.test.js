const Contact = require('./contact');
const InsertionSort = require('./insertion-sort');

describe('InsertionSort', () => {

  const contacts = [
    new Contact('Nico', 'Greco', '555-555-5555'),
    new Contact('Josh', 'Davidson', '111-111-1111'),
    new Contact('Josephine', 'Johnson', '222-222-2222'),
    new Contact('John', 'Smith', '999-999-9999'),
    new Contact('Alexa', 'Franklin', '888-888-8888'),
    new Contact('Barbara', 'Hickinsons', '444-444-4444'),
    new Contact('Zed', 'Lepplin', '555-555-5555'),
    new Contact('Travis', 'Ryan', '111-111-1111'),
    new Contact('Augustus', 'Dale', '222-222-2222'),
    new Contact('Sam', 'Hoover', '999-999-9999'),
    new Contact('Fransis', 'Archer', '888-888-8888'),
    new Contact('Carmen', 'Mills', '444-444-4444'),
    new Contact('Tyler', 'MacPeak', '222-222-2222'),
    new Contact('Cody', 'Milner', '999-999-9999'),
    new Contact('Karen', 'Witt', '888-888-8888'),
    new Contact('Will', 'Ferrell', '444-444-4444')
  ];

  test('should sort a given array of contacts', () => {
    InsertionSort(contacts);

    expect(contacts[0].lastName).toEqual('Archer');
  });

});