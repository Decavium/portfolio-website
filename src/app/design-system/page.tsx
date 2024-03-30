import Image from "next/image";

//Images
import Pic01 from "/public/images/design-system/pic01.jpg";
import Pic02 from "/public/images/design-system/pic02.jpg";
import Pic03 from "/public/images/design-system/pic03.jpg";
import Pic04 from "/public/images/design-system/pic04.jpg";
import Pic05 from "/public/images/design-system/pic05.jpg";
import Pic06 from "/public/images/design-system/pic06.jpg";

export default function DesignSystem() {
    return (
            <main id="wrapper">

                {/* Header */}
                <header id="header">
                    <h1>Elements</h1>
                    <p>Ipsum dolor sit amet nullam</p>
                </header>

                {/* Main */}
                <div id="main">

                    {/* Content */}
                    <section id="content" className="main">

                        {/* Text */}
                        <section>
                            <h2>Text</h2>
                            <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                                This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                                This is <u>underlined</u> and this is code: <code>{`for (;;) { ... }`}</code>. Finally, <a href="#">this is a link</a>.</p>
                            <hr />
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <hr />
                            <h2>Heading Level 2</h2>
                            <h3>Heading Level 3</h3>
                            <h4>Heading Level 4</h4>
                            <hr />
                            <h3>Blockquote</h3>
                            <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
                            <h3>Preformatted</h3>
                            <pre><code>{`i = 0;

while (!deck.isInOrder()) {
    print 'Iteration ' + i;
    deck.shuffle();
    i++;
}

print 'It took ' + i + ' iterations to sort the deck.';`}</code></pre>
                        </section>

                        {/* Lists */}
                        <section>
                            <h2>Lists</h2>
                            <div className="row">
                                <div className="col-6 col-12-medium">
                                    <h3>Unordered</h3>
                                    <ul>
                                        <li>Dolor pulvinar magna etiam.</li>
                                        <li>Sagittis sed lorem adipiscing.</li>
                                        <li>Felis enim etiam feugiat.</li>
                                        <li>Ipsum lorem nullam consequat.</li>
                                    </ul>
                                    <h3>Alternate</h3>
                                    <ul className="alt">
                                        <li>Dolor pulvinar magna etiam.</li>
                                        <li>Sagittis sed lorem adipiscing.</li>
                                        <li>Felis enim etiam feugiat.</li>
                                        <li>Ipsum lorem nullam consequat.</li>
                                    </ul>
                                </div>
                                <div className="col-6 col-12-medium">
                                    <h3>Ordered</h3>
                                    <ol>
                                        <li>Dolor pulvinar etiam.</li>
                                        <li>Etiam vel felis viverra.</li>
                                        <li>Felis enim feugiat.</li>
                                        <li>Dolor pulvinar etiam.</li>
                                        <li>Etiam vel felis lorem.</li>
                                        <li>Felis enim et feugiat.</li>
                                    </ol>
                                    <h3>Icons</h3>
                                    <ul className="icons">
                                        <li><a href="#" className="icon brands fa-twitter"><span className="label">Facebook</span></a></li>
                                        <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                        <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                        <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                                        <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                                    </ul>
                                    <ul className="icons">
                                        <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
                                        <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
                                        <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
                                        <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                                        <li><a href="#" className="icon brands alt fa-dribbble"><span className="label">Dribbble</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <h2>Actions</h2>
                            <div className="row">
                                <div className="col-6 col-12-medium">
                                    <ul className="actions">
                                        <li><a href="#" className="button primary">Default</a></li>
                                        <li><a href="#" className="button">Default</a></li>
                                    </ul>
                                    <ul className="actions small">
                                        <li><a href="#" className="button primary small">Small</a></li>
                                        <li><a href="#" className="button small">Small</a></li>
                                    </ul>
                                    <ul className="actions stacked">
                                        <li><a href="#" className="button primary">Default</a></li>
                                        <li><a href="#" className="button">Default</a></li>
                                    </ul>
                                    <ul className="actions stacked">
                                        <li><a href="#" className="button primary small">Small</a></li>
                                        <li><a href="#" className="button small">Small</a></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-12-medium">
                                    <ul className="actions stacked">
                                        <li><a href="#" className="button primary fit">Default</a></li>
                                        <li><a href="#" className="button fit">Default</a></li>
                                    </ul>
                                    <ul className="actions stacked">
                                        <li><a href="#" className="button primary small fit">Small</a></li>
                                        <li><a href="#" className="button small fit">Small</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Table */}
                        <section>
                            <h2>Table</h2>
                            <h3>Default</h3>
                            <div className="table-wrapper">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Item One</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td>29.99</td>
                                        </tr>
                                        <tr>
                                            <td>Item Two</td>
                                            <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                            <td>19.99</td>
                                        </tr>
                                        <tr>
                                            <td>Item Three</td>
                                            <td> Morbi faucibus arcu accumsan lorem.</td>
                                            <td>29.99</td>
                                        </tr>
                                        <tr>
                                            <td>Item Four</td>
                                            <td>Vitae integer tempus condimentum.</td>
                                            <td>19.99</td>
                                        </tr>
                                        <tr>
                                            <td>Item Five</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td>29.99</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={2}></td>
                                            <td>100.00</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <h3>Alternate</h3>
                            <div className="table-wrapper">
                                <table className="alt">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Item One</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td>29.99</td>
                                        </tr>
                                        <tr>
                                            <td>Item Two</td>
                                            <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                            <td>19.99</td>
                                        </tr>
                                        <tr>
                                            <td>Item Three</td>
                                            <td> Morbi faucibus arcu accumsan lorem.</td>
                                            <td>29.99</td>
                                        </tr>
                                        <tr>
                                            <td>Item Four</td>
                                            <td>Vitae integer tempus condimentum.</td>
                                            <td>19.99</td>
                                        </tr>
                                        <tr>
                                            <td>Item Five</td>
                                            <td>Ante turpis integer aliquet porttitor.</td>
                                            <td>29.99</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={2}></td>
                                            <td>100.00</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </section>

                        {/* Buttons */}
                        <section>
                            <h3>Buttons</h3>
                            <ul className="actions">
                                <li><a href="#" className="button primary">Primary</a></li>
                                <li><a href="#" className="button">Default</a></li>
                            </ul>
                            <ul className="actions">
                                <li><a href="#" className="button large">Large</a></li>
                                <li><a href="#" className="button">Default</a></li>
                                <li><a href="#" className="button small">Small</a></li>
                            </ul>
                            <ul className="actions fit">
                                <li><a href="#" className="button primary fit">Fit</a></li>
                                <li><a href="#" className="button fit">Fit</a></li>
                                <li><a href="#" className="button fit">Fit</a></li>
                            </ul>
                            <ul className="actions fit small">
                                <li><a href="#" className="button primary fit small">Fit + Small</a></li>
                                <li><a href="#" className="button fit small">Fit + Small</a></li>
                                <li><a href="#" className="button fit small">Fit + Small</a></li>
                            </ul>
                            <ul className="actions">
                                <li><a href="#" className="button primary icon solidfa-download">Icon</a></li>
                                <li><a href="#" className="button icon solid fa-upload">Icon</a></li>
                                <li><a href="#" className="button icon solid fa-save">Icon</a></li>
                            </ul>
                            <ul className="actions">
                                <li><span className="button primary disabled">Disabled</span></li>
                                <li><span className="button disabled">Disabled</span></li>
                            </ul>
                        </section>

                        {/* Form */}
                        <section>
                            <h2>Form</h2>
                            <form method="post" action="#">
                                <div className="row gtr-uniform">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
                                    </div>
                                    <div className="col-6 col-12-xsmall">
                                        <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                                    </div>
                                    <div className="col-12">
                                        <select name="demo-category" id="demo-category">
                                            <option value="">- Category -</option>
                                            <option value="1">Manufacturing</option>
                                            <option value="1">Shipping</option>
                                            <option value="1">Administration</option>
                                            <option value="1">Human Resources</option>
                                        </select>
                                    </div>
                                    <div className="col-4 col-12-small">
                                        <input type="radio" id="demo-priority-low" name="demo-priority" checked />
                                        <label htmlFor="demo-priority-low">Low</label>
                                    </div>
                                    <div className="col-4 col-12-small">
                                        <input type="radio" id="demo-priority-normal" name="demo-priority" />
                                        <label htmlFor="demo-priority-normal">Normal</label>
                                    </div>
                                    <div className="col-4 col-12-small">
                                        <input type="radio" id="demo-priority-high" name="demo-priority" />
                                        <label htmlFor="demo-priority-high">High</label>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <input type="checkbox" id="demo-copy" name="demo-copy" />
                                        <label htmlFor="demo-copy">Email me a copy</label>
                                    </div>
                                    <div className="col-6 col-12-small">
                                        <input type="checkbox" id="demo-human" name="demo-human" checked />
                                        <label htmlFor="demo-human">Not a robot</label>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows={6}></textarea>
                                    </div>
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input type="submit" value="Send Message" className="primary" /></li>
                                            <li><input type="reset" value="Reset" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </section>

                        {/* Image */}
                        <section>
                            <h2>Image</h2>
                            <h3>Fit</h3>
                            <div className="box alt">
                                <div className="row gtr-uniform">
                                    <div className="col-12"><span className="image fit"><Image src={Pic04} width={0} height={0} quality={100} alt="" /></span></div>
                                    <div className="col-4"><span className="image fit"><Image src={Pic01} width={0} height={0} quality={85} alt="" /></span></div>
                                    <div className="col-4"><span className="image fit"><Image src={Pic02} width={0} height={0} quality={85} alt="" /></span></div>
                                    <div className="col-4"><span className="image fit"><Image src={Pic03} width={0} height={0} quality={85} alt="" /></span></div>
                                    <div className="col-4"><span className="image fit"><Image src={Pic03} width={0} height={0} quality={85} alt="" /></span></div>
                                    <div className="col-4"><span className="image fit"><Image src={Pic01} width={0} height={0} quality={85} alt="" /></span></div>
                                    <div className="col-4"><span className="image fit"><Image src={Pic02} width={0} height={0} quality={85} alt="" /></span></div>
                                    <div className="col-4"><span className="image fit"><Image src={Pic02} width={0} height={0} quality={85} alt="" /></span></div>
                                    <div className="col-4"><span className="image fit"><Image src={Pic03} width={0} height={0} quality={85} alt="" /></span></div>
                                    <div className="col-4"><span className="image fit"><Image src={Pic01} width={0} height={0} quality={85} alt="" /></span></div>
                                </div>
                            </div>
                            <h3>Left &amp; Right</h3>
                            <p><span className="image left"><Image src={Pic05} width={0} height={0} quality={90} alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent lorem ipsum dolor sit amet veroeros consequat. Etiam tempus lorem ipsum.</p>
                            <p><span className="image right"><Image src={Pic06} width={0} height={0} quality={90} alt="" /></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus..</p>
                        </section>

                    </section>

                </div>

                {/* Footer */}
                <footer id="footer">
                    <section>
                        <h2>Aliquam sed mauris</h2>
                        <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
                        <ul className="actions">
                            <li><a href="#" className="button">Learn More</a></li>
                        </ul>
                    </section>
                    <section>
                        <h2>Etiam feugiat</h2>
                        <dl className="alt">
                            <dt>Address</dt>
                            <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
                            <dt>Phone</dt>
                            <dd>(000) 000-0000 x 0000</dd>
                            <dt>Email</dt>
                            <dd><a href="#">information@untitled.tld</a></dd>
                        </dl>
                        <ul className="icons">
                            <li><a href="#" className="icon brands fa-twitter alt"><span className="label">Twitter</span></a></li>
                            <li><a href="#" className="icon brands fa-facebook-f alt"><span className="label">Facebook</span></a></li>
                            <li><a href="#" className="icon brands fa-instagram alt"><span className="label">Instagram</span></a></li>
                            <li><a href="#" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
                            <li><a href="#" className="icon brands fa-dribbble alt"><span className="label">Dribbble</span></a></li>
                        </ul>
                    </section>
                    <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
                </footer>

            </main>
    )
}