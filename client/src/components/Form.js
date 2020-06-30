import React, { Fragment } from "react";
import "../css/form.css";

const Form = () => {
    return (
        <Fragment>
            <div className="form_box">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf1QS9GGywGK6REUCKXaGsBQ-RRsVWfKztlmaN82Lp8uxnpcA/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                >
                    Loading…
                </iframe>
            </div>
        </Fragment>
    );
};

export default Form;
