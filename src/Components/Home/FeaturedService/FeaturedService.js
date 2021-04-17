import React from 'react';
import featured from '../../../images/pic2.jpg'
const FeaturedService = () => {
    return (
        <section>

            <div className=" py-5 bg-light">
                <hr style={{ borderTop: '2px dashed red' }} />
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-5">
                            <img className="img-fluid" src={featured} alt="" />
                        </div>
                        <div className="col-md-7">
                            <h1 className="customFont">Exceptional Care for your Children</h1>
                            <p className="text-secondary my-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;