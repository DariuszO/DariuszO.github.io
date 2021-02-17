// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
const tablevue = { template: '                <h4>Szukaj</h4>
                <div class="table-wrapper">
					<div id="table-vue">
                        <form id="search">
                            <input name="query" v-model="searchQuery" />
                        </form>
                        <table-vue-grid :heroes="gridData" :columns="gridColumns" :filter-key="searchQuery">
                        </table-vue-grid>
                    </div>
                        <thead>
                            <tr>
                                <th>&nbsp</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="3">&nbsp</td>
                                <td></td>
                                <td></td>
							</tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2"></td>
                                <td colspan="2"></td>
                                <td>100.00<br><br><br>
                                    <h4><a href="#kontakt">Kontakt</h4></a></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>' }
const tableold = { template: '									<h4>Default</h4>
									<div class="table-wrapper">
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
													<td colspan="2"></td>
													<td>100.00<br><br><br><h4><a href="#kontakt">Kontakt</h4></a></td>
												</tr>
											</tfoot>
										</table>
									</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/tablevue', component: tablevue },
  { path: '/tableold', component: tableold }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app1 = new Vue({
  router
}).$mount('#app1')

// Now the app has started!