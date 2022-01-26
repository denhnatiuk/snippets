class CloneNode {
    constructor(params){

    }
    isExists = (o)=>{
        return(

        );
    }
    /**
     * @return bool 
     */ 
    isNode = (o)=>{
        return (
            typeof Node === "object" ? 
            o instanceof Node :
            o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
        );
    }
    /**
     * @return bool 
     */ 
    isElement = (o)=>{
        return (
            typeof HTMLElement === "object" ? 
            o instanceof HTMLElement : 
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
        );
    }
    return (
        clone = () => {

        }
        render = () => {

        }
    );
}