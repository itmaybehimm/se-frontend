import { Tab } from "@headlessui/react"
import React from "react"
import PropTypes from "prop-types"
import { BASE_URL } from "../../../constants/baseURL"

const DocumentTab = ({ user }) => {
    const document = user.identity

    return (
        <Tab.Panel className="rounded-xl focus:outline-none">
            <ul className="flex flex-col items-center space-y-6">
                <li>
                    <span className="text-xl font-medium text-center">
                        {user.volunteer
                            ? "Citizenship Document"
                            : "Organization Official Document"}
                    </span>
                </li>
                <li>
                    <div className="w-full ">
                        <img
                            src={`${BASE_URL}${document}`}
                            alt="document"
                            className="rounded-lg"
                        />
                    </div>
                </li>
            </ul>
        </Tab.Panel>
    )
}

export default DocumentTab

DocumentTab.propTypes = {
    user: PropTypes.object,
}
