const Contact = (function() {
  function Contact(first, last, phone) {
    this._firstName = first || null;
    this._lastName = last || null;
    this._phoneNumber = phone || null;
  }

  Object.defineProperty(Contact.prototype, 'firstName', {
    get: function () {
      return this._firstName;
    },
    enumerable: true,
    configurable: false
  });

  Object.defineProperty(Contact.prototype, 'lastName', {
    get: function () {
      return this._lastName;
    },
    enumerable: true,
    configurable: false
  });

  Object.defineProperty(Contact.prototype, 'phone', {
    get: function () {
      return this._phoneNumber;
    },
    enumerable: true,
    configurable: false
  });

  Object.defineProperty(Contact.prototype, 'toString', {
    value: function() {
      return `${this.lastName}, ${this.firstName}\t${this.phone}`
    }
  });

  Object.defineProperty(Contact.prototype, 'compareTo', {
    value: function(con) {
      const lhsLastName = this.lastName.toLowerCase();
      const rhsLastName = con.lastName.toLowerCase();

      if (lhsLastName > rhsLastName) {
        return 1;
      } else if (lhsLastName < rhsLastName) {
        return -1;
      } else {
        // fallback to first name
        const lhsFirstName = this.firstName.toLowerCase();
        const rhsFirstName = con.firstName.toLowerCase();
        if (lhsFirstName > rhsFirstName) {
          return 1;
        } else if (lhsFirstName < rhsFirstName) {
          return -1;
        }
        // Both names are equal
        return 0;
      }
    }
  });

  return Contact;
})();

module.exports = Contact;