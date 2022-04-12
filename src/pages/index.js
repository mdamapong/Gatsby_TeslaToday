import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
const IndexPage = () => {
	return (
		<Layout pageTitle='Tesla Today'>
			<p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage
				alt='Tesla delivers 65,814 China-made vehicles in March, up 16% from the previous month.'
				src='https://images.barrons.com/im-336622/social'
			/>
		</Layout>
	);
};
export default IndexPage;
