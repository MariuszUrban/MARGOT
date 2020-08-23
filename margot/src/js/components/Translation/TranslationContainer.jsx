import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {TRANSLATIONS} from '../../../languages/translations';
import Translation from './Translation';

class TranslationContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             translation: '',
        }
    }

    componentDidMount(){
        this._updateTranslation(this.props.translationKey, this.props.locale);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.translationKey !== nextProps.translationKey || this.props.locale !== nextProps.locale){
            this._updateTranslation(nextProps.translationKey, nextProps.locale);
        }
    }

    _updateTranslation(translationKey, activeLanguageCode){
        if(translationKey && activeLanguageCode){
            try{
                this.setState({translation: TRANSLATIONS[activeLanguageCode][activeLanguageCode]});
            }catch (error){
                console.log(error)
            }
    }}


    render() {
       if(!this.state.translation || this.state.translation === '') return null;
       return (
           <Translation translation={this.state.translation} />
       );
       }   
}


function mapStateToProps(state){
    return{
        locale: state.translation.locale,
    };
}

export default function connect(mapStateToProps, null)(TranslationContainer);

TranslationContainer.propTypes = {
    translationKey: PropTypes.string.isRequired,
    locale: PropTypes.string,
  };