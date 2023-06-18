import React, { useEffect, useState } from 'react'
import "./github.css"

const GitHubProfile = () => {
    const [user, setUser] = useState([])

    const getUser = async () => {
        const gitHubApi = await fetch('https://jsonplaceholder.typicode.com/photos  ')
            ;
        console.log(gitHubApi)

        setUser(await gitHubApi.json())
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <div className='container'>
                <div className="row" style={{ justifyContent: "space-around" }}>
                    {
                        user.map((data) => {
                            return (
                                <div className="card col-lg-3 col-sm-1" style={{ maxWidth: "540px",margin:"20px" }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                        <img src={data.thumbnailUrl} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="card-body">
                                                
                                                <h5 className="card-text cardStyle">{data.title}</h5>
                                                
                                                <a className="card-title urlStyle" target='blanks' href={data.url}>visit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default GitHubProfile
