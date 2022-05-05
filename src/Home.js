const Home = () => {
    
    return (
        <><div className="container hero">
            <div className="row" id="LogoBox">
                <div className="col-md-12">
                    <label className="text-center" id="Logo">Support</label>
                    <br></br>
                    <label className="text-center" id="Slogen">Give what you have .. Get what you need</label>
                </div>
            </div>

            <div className="row" id="LogoBox">
                <div className="col-md-12">
                    <label className="text-center" id="Starter">Here Is How You Can Be Part Of The Story</label>
                </div>
            </div>

        </div><div className="container" id="Slider">
                <div className="main-timeline">


                    <div className="timeline">
                        <div className="icon"></div>
                        <div className="date-content">
                            <div className="date-outer">
                                <span className="date">
                                    <span className="month">Step</span>
                                    <span className="year">ONE</span>
                                </span>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h5 className="title">SignUp</h5>
                            <p className="description">
                            Click the Sign up button to create your account and be a part of the Support community! It’s free and will just take a moment of your time. 

                            </p>
                        </div>
                    </div>



                    <div className="timeline">
                        <div className="icon"></div>
                        <div className="date-content">
                            <div className="date-outer">
                                <span className="date">
                                    <span className="month">Step</span>
                                    <span className="year">TWO</span>
                                </span>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h5 className="title">My Skills</h5>
                            <p className="description">
                            Select which skills you possess and that you would consider teaching others! Don’t worry, you can of course update these later on. 
                            </p>
                        </div>
                    </div>
                    
                    <div className="timeline">
                        <div className="icon"></div>
                        <div className="date-content">
                            <div className="date-outer">
                                <span className="date">
                                    <span className="month">Step</span>
                                    <span className="year">THREE</span>
                                </span>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h5 className="title">Desired Skills</h5>
                            <p className="description">
                            Choose which skills you’re interested in learning for now! 
                            </p>
                        </div>
                    </div>
                 

                    
                    <div className="timeline">
                        <div className="icon"></div>
                        <div className="date-content">
                            <div className="date-outer">
                                <span className="date">
                                    <span className="month">Step</span>
                                    <span className="year">FOUR</span>
                                </span>
                            </div>
                        </div>
                        <div className="timeline-content">
                            <h5 className="title">Interact</h5>
                            <p className="description">
                            Browse suggested matches based on your skills profile. Establish contact with other Support members through the chat function!

                            </p>
                        </div>
                    </div>

                </div>
            </div></>
    )
  };
  
  export default Home;