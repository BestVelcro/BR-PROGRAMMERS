module.exports = {
  
  object: {
    aliases: [],
    permissions: [],
    userIDs: []
  },
  
  properties: {
    name: {
      required: true,
      type: 'string'
    },
    run: {
      required: true,
      type: 'function'
    },
    aliases: {
      check: Array.isArray
    },
    permissions: {
      check: Array.isArray
    },
    userIDs: {
      check: Array.isArray
    }
  }
  
}