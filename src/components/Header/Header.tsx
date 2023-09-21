
import styles from "./Header.module.scss"
import { MdAccountCircle } from "react-icons/md";
import Hamburger from 'hamburger-react'
// import { BiSearch } from "react-icons/bi";
import { Context, useSideBarContext } from "../../contexts/SideBarContext";
import { useContext, useState } from "react";

// type Search = {
//     search: string;
// };
// const initialValues: Search = {
//     search: ""
// }
// const validationSchema = Yup.object({
//     search: Yup.string().required("required"),
// });
function Header() {
    const _contextVal = useSideBarContext();
    const [userInput , setUserInput] = useState("");
    const contextValue = useContext(Context)
    const onSubmit = () => {
        setUserInput('')
    }
    const handleOnChange = (val:string) => {
        setUserInput(val)
        contextValue?.setSearchState(val)
    };

    function switchVal(prev: boolean) {
    return !prev
    }

  return (
    <header>
        <div className={styles.heading}>
            <div className={styles.logo__mb}>
                <Hamburger size={19} onToggle={toggled => {
                    if(toggled){
                        _contextVal!.setOpened(switchVal(false))
                    }else{
                        _contextVal!.setOpened(switchVal(true))
                    }
                }}/>
            </div>

            <div className={styles.logo__bg}>
                <h1>Premiere</h1>
            </div>
            <div className={styles.middle}>
                <input  
                    onChange={(e) =>  handleOnChange(e.target.value)}
                    onSubmit={onSubmit}
                    value={userInput}
                    className={styles.field} 
                    type="text" name='search' 
                    placeholder="Search images by tag"
                    /> 
                {/* <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {(formik)=>{
                        return(
                            <Form onChange={handleOnChange}>
                                <FormObserver/>
                                <div className={styles.input}>
                                    <Field className={styles.field} type="text" name='search' placeholder="Search images by tag"/>
                                    <button className={styles.btn} type="submit" disabled={!formik.isValid || formik.isSubmitting}><BiSearch/></button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik> */}
            </div>
            <div className={styles.profile__mb}>
                <MdAccountCircle/>
            </div>
            
        </div>
    </header>
  )
}

export default Header