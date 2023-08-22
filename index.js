const Notification = (props) => {
  //  Write your code here.
  const { message , icon,similarProperties,Notification,src} = props;
  return (
      <div className=`${Notification} ${similarProperties}>
        <img src={src} className={icon}/>
        <p>{message} Message</p>

      </div>
  )
};

const element = (
  //  Write your code here.
  <div className="bg_container">
    <div className="card-container">
      <h1 className="notification_heading">Notifications</h1>
      <div className="notification-container">
        <Notification message = 'Information' icon ='icon' similarProperties = 'similar_properties' Notification='first-notification ' src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'/>
        <div className="first-notification similar_properties">
          <img
            src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
            className="icon"
          />
          <p>Information Message</p>
        </div>
        <div className="second-notification similar_properties">
          <img
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            className="icon"
          />
          <p>Success Message</p>
        </div>
        <div className="third-notification similar_properties">
          <img
            src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
            className="icon"
          />
          <p>Warning Message</p>
        </div>
        <div className="fourth-notification similar_properties">
          <img
            src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
            className="icon"
          />
          <p>Error Message</p>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
