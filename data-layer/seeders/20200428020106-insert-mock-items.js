"use strict";

const mockItems = [
  {
    id: "LALALA-1234",
    name: "Lalala",
  },
  {
    id: "LOLOLO-5678",
    name: "Lolo",
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Items", mockItems, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      "Items",
      {
        id: { [Sequelize.Op.in]: mockItems.map((mockItem) => mockItem.id) },
      },
      {}
    );
  },
};
