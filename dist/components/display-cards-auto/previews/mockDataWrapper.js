// mockDataWrapper.js
export const mockDataWrapper = {
  parent: {
    id: "2000",
    name: "Mock Parent Asset"
  },

  children: [
    {
      assetId: "1001",
      name: "Mock Child One",
      metadata: {
        description: "This is example supporting text for child one."
      },
      urls: {
        full: "https://example.com/child-one"
      }
    },
    {
      assetId: "1002",
      name: "Mock Child Two",
      metadata: {
        description: "Additional supporting text for child two."
      },
      urls: {
        full: "https://example.com/child-two"
      }
    },
    {
      assetId: "1003",
      name: "Mock Child Three",
      metadata: {
        description: "Optional description for child three."
      },
      urls: {
        full: "https://example.com/child-three"
      }
    }
  ]
};
