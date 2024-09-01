import React from 'react'
import { Outlet , Link } from 'react-router-dom'
import {ScreenHeaderProps} from './useScreenHeader'
const ScreenHeader:React.FC<ScreenHeaderProps> = (props)  => {
  return (
    <>
      <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">{props.PageName}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">{props.ItemName}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        </>
  )
}

export default ScreenHeader
