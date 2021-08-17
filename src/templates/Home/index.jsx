//Importação
import './styles.css';

import { Component } from 'react';

import {loadPosts} from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export class Home extends Component{
  
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 9,
    searchValue: '',
  };

  async componentDidMount(){
    const {page, postsPerPage} = this.state;
    const postAndImage = await loadPosts();
    this.setState({ 
      posts: postAndImage.slice(page, postsPerPage), 
      allPosts: postAndImage, 
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage+postsPerPage)
    posts.push(...nextPosts);

    this.setState({
      posts, page: nextPage
    })
  }

  handleChange = (e) => {
    const {value} = e.target
    this.setState({
      searchValue: value,
    })
  }
  
  render(){
    const {posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosters = !!searchValue ? 
    allPosts.filter(posts => {
      return posts.title.toLowerCase().includes(
          searchValue.toLowerCase()
        )
    }) 
    : 
    posts;

    return (
      <section className="container">

        <div className="search-container" >
          {!!searchValue && (
            <h1>Search Value: {searchValue}</h1>
          )}
          <TextInput searchValue={searchValue} handleChange={this.handleChange} />
        </div>

        {filteredPosters.length > 0 && (
          <Posts posts={filteredPosters} />
        )}
        
        {filteredPosters.length === 0 && (
          <h2>NO MATCH</h2>
        )}

        <div className="button-container">
          {!searchValue && (
            <Button 
            text="Load More Posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
          )}
        </div>

      </section>
    );
  }
}

