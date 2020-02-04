import { DYNAMIC_COMPONENT_INIT  } from './../types/types';
    
  const initialState = {
    data: {},
    dataErrors: {},
    config: {},
    context: {},
    serviceCall: () => {},
    savaData: () => {},
    ping:{datetime:new Date()	},
    test:1
  };
  
  // ------------------------------------
  // Action Handlers
  // ------------------------------------
  const ACTION_HANDLERS = {
    [DYNAMIC_COMPONENT_INIT]: (state, action) => {
        const { config, data, serviceCall } = action;
        const newObj={};
        return {
            ...state,config,data, serviceCall,newObj
        }
    }
  };
  
  // ------------------------------------
  // Reducer
  // ------------------------------------
  export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
  };
  