import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { BASE_URL } from "../../constants/baseURL"
import axios from "axios"

import { relativeDate } from "../../helpers/date"
import { Link } from "react-router-dom"

const InvitationDisplay = ({ invite }) => {
    const [inv, setInv] = useState(null)
    const [show, setShow] = useState(null)
    useEffect(async () => {
        const loadEventUrl =
            BASE_URL +
            `/api/volunteer/get_request_event/${invite.user}/${invite.event}`

        const { data } = await axios.get(loadEventUrl)
        console.log(data)
        setInv(data[0])
        setShow(data[0].approved)
    }, [])

    return (
        <>
            {show && (
                <div className="rounded-lg px-8 hover:bg-gray-50 ">
                    <div className="flex flex-col p-6 max-w-screen-lg mx-auto">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row space-x-8 items-center">
                                <img
                                    src={`${BASE_URL}${inv.user.images}`}
                                    className="h-16 w-16 rounded-full border-2 border-gray-300 object-cover"
                                />
                                <div className="flex flex-col space-y-2 max-w-xl">
                                    <div className="text-lg">
                                        <span className="font-medium">
                                            {inv.user.full_name}
                                        </span>{" "}
                                        your request to join you an
                                        event named{" "}
                                        <span className="font-medium">
                                            {inv.event.name}.
                                        </span>{" "}
                                        was approved
                                    </div>
                                    <div className="text-sm text-purple-500">
                                        {relativeDate(
                                            inv.event.posted_at
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link
                                    to={`/user/event/${inv.event.id}`}
                                    className="text-white px-6 py-3 rounded-lg text-lg bg-purple-500"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr className="max-w-screen-lg mx-auto" />
                </div>
            )}
        </>
    )
}

export default InvitationDisplay

InvitationDisplay.propTypes = {
    invite: PropTypes.object,
}
