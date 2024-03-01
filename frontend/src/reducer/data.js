export const dataReducer = (state,action)=>{

    switch (action.type) {
        //Education
      case "FETCH_EDUCATION_REQ":
        return { ...state, loading: true, error: null };
      case "FETCH_EDUCATION_SUCCESS":
        return { ...state, loading: false,educations: action.payload };
      case "FETCH_PRODUCTS_FAILURE": 
        return { ...state, loading: false, error: action.payload };
        // education type
        case "FETCH_EDUCATION_TYPE_REQ":
            return { ...state, loading: true, error: null };
          case "FETCH_EDUCATION_TYPE_SUCCESS":
            return { ...state, loading: false,educationType: action.payload };
          case "FETCH_EDUCATION_TYPE_FAILURE": 
            return { ...state, loading: false, error: action.payload };
            //internship
            case "FETCH_INTERNS_REQ":
            return { ...state, loading: true, error: null };
          case "FETCH_INTERNS_SUCCESS":
            return { ...state, loading: false,interships: action.payload };
          case "FETCH_INTERNS_FAILURE":
            return { ...state, loading: false, error: action.payload }; 
            //services
            case "FETCH_SERVICES_REQ":
            return { ...state, loading: true, error: null };
          case "FETCH_SERVICES_SUCCESS":
            return { ...state, loading: false,services: action.payload };
          case "FETCH_SERVICES_FAILURE": 
          return { ...state, loading: false, error: action.payload };
           //projects
           case "FETCH_PROJECT_REQ":
            return { ...state, loading: true, error: null };
          case "FETCH_PROJECT_SUCCESS":
            return { ...state, loading: false,project: action.payload };
          case "FETCH_PROJECT_FAILURE": 
          return { ...state, loading: false, error: action.payload };
          //skills
           case "FETCH_SKILL_REQ":
            return { ...state, loading: true, error: null };
          case "FETCH_SKILL_SUCCESS":
            return { ...state, loading: false,skills: action.payload };
          case "FETCH_SKILL_FAILURE": 
          return { ...state, loading: false, error: action.payload };
           //testscore
          case "FETCH_TESTSCORE_REQ":
            return { ...state, loading: true, error: null };
          case "FETCH_TESTSCORE_SUCCESS":
            return { ...state, loading: false,testscore: action.payload };
          case "FETCH_TESTSCORE_FAILURE": 
          return { ...state, loading: false, error: action.payload };
          //publication
          case "FETCH_PUBLICATION_REQ":
            return { ...state, loading: true, error: null };
          case "FETCH_PUBLICATION_SUCCESS":
            return { ...state, loading: false,publications: action.payload };
          case "FETCH_PUBLICATION_FAILURE": 
          return { ...state, loading: false, error: action.payload };
          // testmonials
          case "FETCH_TESTIMONIALS_REQ":
            return { ...state, loading: true, error: null };
          case "FETCH_TESTIMONIALS_SUCCESS":
            return { ...state, loading: false,testimonials: action.payload };
          case "FETCH_TESTIMONIALS_FAILURE": 
          return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
}