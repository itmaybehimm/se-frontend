import React from "react"
import {
    HomeIcon,
    MailIcon,
    PhoneIcon,
    UserIcon,
} from "@heroicons/react/outline"
import UserProfileLoading from "../../loading/UserProfileLoading"
import PropTypes from "prop-types"

const ViewUserProfile = ({ user, toggleEditMode }) => {
    return (
        <>
            {user && (
                <div className="flex divide-y-2 flex-col w-full border bg-white rounded-lg shadow-xl">
                    <div className="flex flex-col justify-center items-center md:flex-row mx-8 lg:mx-12 my-8 lg:my-12">
                        <div className="flex-shrink-0 flex flex-row">
                            <img
                                alt="Profile"
                                src={user.images}
                                className="rounded-full w-40 md:w-48 lg:w-56 shadow-xl"
                            />
                        </div>
                        <div className="flex flex-col-reverse md:flex-col space-y-6 ml-8 w-full">
                            <div className="flex flex-row justify-center mt-8 md:mt-0 md:justify-end"></div>
                            <div className="">
                                <div className="flex flex-row justify-center md:justify-start mt-4 md:mt-0 mb-4 text-3xl font-semibold">
                                    {user.full_name}
                                </div>
                                <div className="flex flex-row justify-center items-center md:justify-start text-xm lg:text-lg md:text-base break-words text-gray-500">
                                    {user.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 font-semibold mx-8 md:mx-16 py-8">
                        <li className="inline-flex">
                            <UserIcon className=" text-purple-600 h-12 w-10 mr-2" />
                            <ul>
                                <li className="">Role</li>
                                <li className="font-normal">
                                    {user.volunteer
                                        ? "Volunteer"
                                        : "Organization"}
                                </li>
                            </ul>
                        </li>
                        <li className="inline-flex">
                            <HomeIcon className=" text-purple-600 h-12 w-10 mr-2" />
                            <ul>
                                <li className="">Address</li>
                                <li className="font-normal">
                                    {user.address}
                                </li>
                            </ul>
                        </li>
                        <li className="inline-flex">
                            <MailIcon className=" text-purple-600 h-12 w-10 mr-2" />
                            <ul>
                                <li className="">Email</li>
                                <li className="font-normal">
                                    {user.email}
                                </li>
                            </ul>
                        </li>
                        <li className="inline-flex">
                            <PhoneIcon className=" text-purple-600 h-12 w-10 mr-2" />
                            <ul>
                                <li className="">Phone</li>
                                <li className="font-normal">
                                    {user.phone}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )}
            {!user && <UserProfileLoading />}
        </>
    )
}

export default ViewUserProfile

ViewUserProfile.propTypes = {
    user: PropTypes.any,
    toggleEditMode: PropTypes.func,
}
