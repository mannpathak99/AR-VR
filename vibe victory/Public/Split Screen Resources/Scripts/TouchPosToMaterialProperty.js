// TouchPosToMaterialProperty.js
// Description: Send the touch position to a material property
// Event - OnAwake
// Version 0.1.1
// @input Asset.Material splitMaterial
// @input string property
// @input string direction = "x" {"widget" : "combobox", "values" : [{"value":"x", "label" : "x"}, {"value":"y", "label" : "y"}]}

function enableTouchBlocking(){
    // Enable full screen touches
    global.touchSystem.touchBlocking = true;
    
    // Allow double-tap to be passed through to Snapchat to flip the camera.
    global.touchSystem.enableTouchBlockingException("TouchTypeTouch", true);
    global.touchSystem.enableTouchBlockingException("TouchTypeTap", true);
    
    global.touchSystem.enableTouchBlockingException("TouchTypeTap", true);
    global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);
}

function updateMaterial(eventData) {
    script.splitMaterial.mainPass[script.property] = eventData.getTouchPosition()[script.direction]; //this name is a script name of parameter from material editor
}

enableTouchBlocking();
script.createEvent("TouchStartEvent").bind(updateMaterial);
script.createEvent("TouchMoveEvent").bind(updateMaterial);
