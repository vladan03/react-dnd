import { FC, memo } from 'react'
import { graphql } from 'gatsby'
import { Doc } from '../components/doc'
import { Layout } from '../components/layout'

export const Template: FC<any> = memo(function Template(props) {
	const { currentPage } = props.data

	return (
		<Layout {...props}>
			<Doc docPage={currentPage} />
		</Layout>
	)
})

export const pageQuery = graphql`
	query ($path: String!) {
		currentPage: markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			htmlAst
			frontmatter {
				path
				title
			}
		}

		toc: allMarkdownRemark(
			filter: { frontmatter: { path: { regex: "/^/docs/.*/" } } }
		) {
			edges {
				node {
					frontmatter {
						title
						path
					}
				}
			}
		}
	}
`

export default Template
