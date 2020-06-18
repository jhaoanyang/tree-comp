module.exports = {
  treePool: [
    {
      id: 0,
      name: 'App.vue',
      subTrees: [1, 2, 3],
    },
    {
      id: 1,
      name: 'First Child',
      subTrees: [4, 5],
    },
    {
      id: 2,
      name: 'Second Child',
      subTrees: [],
    },
    {
      id: 3,
      name: 'Third Child',
      subTrees: [],
    },
    {
      id: 4,
      name: 'First Grand Child',
      subTrees: [],
    },
    {
      id: 5,
      name: 'Second Grand Child',
      subTrees: [],
    },
  ],
  sectionComp: [
    {
      id: 0,
      name: 'sec-01',
      compList: [0, 1],
    },
    {
      id: 1,
      name: 'sec-02',
      compList: [2],
    },
  ],
  compPool: [
    {
      id: 0,
      name: 'title',
      propList: [0, 1],
    },
    {
      id: 1,
      name: 'searchbar',
      propList: [0],
    },
    {
      id: 2,
      name: 'searchTable',
      propList: [2],
    },
  ],
  propPool: [
    {
      id: 0,
      name: 'API/GET',
    },
    {
      id: 1,
      name: 'BUTTON',
    },
    {
      id: 2,
      name: 'API/POST',
    },
  ],
};
