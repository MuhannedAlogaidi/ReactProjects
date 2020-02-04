import {DYNAMIC_COMPONENT_INIT,
    DYNAMIC_COMPONENT_INIT_WITH_STATE,
    SAVE_ENTITY_DATA,
    DYNAMIC_COMPONENT_SAVE_DATA,
    DYNAMIC_COMPONENT_SAVE_DATA_ERROR} from './types'
    
export default {
    init: (config, data, serviceCall) => ({
      type: DYNAMIC_COMPONENT_INIT,
      config,
      data,
      serviceCall
    }),
    initWithState: initState => ({
      type: DYNAMIC_COMPONENT_INIT_WITH_STATE,
      initState
    }),
    saveData: (dataPath, componentData) => ({
      type: DYNAMIC_COMPONENT_SAVE_DATA,
      dataPath,
      componentData
    }),
    saveDataErrors: (dataPath, errors) => ({
      type: DYNAMIC_COMPONENT_SAVE_DATA_ERROR,
      dataPath,
      errors
    }),
    saveEntityData: (dataPath, entityType, data, fieldPath, saveMany) => ({
      type: SAVE_ENTITY_DATA,
      dataPath,
      entityType,
      data,
      fieldPath,
      saveMany
    }),  
    saveEntitySessionData: (dataPath, data) => ({
      type: SAVE_ENTITY_DATA,
      dataPath,
      data
    }),

  };
  