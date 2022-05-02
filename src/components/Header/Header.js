import React from 'react';
import Icon from 'components/Icon'
import classes from './styles.modules.css'

const Header = () => {

  return (
    <div className={classes.root} >
      <div className={classes.headerWrapper}>
        <div className={classes.column}>
          <h1>hhhhhhhh</h1>
          <Icon name={'logo'}/>
        </div>
        <div className={classes.column}>
          {/* Navigation */}
        </div>
      </div>
    </div>
  )

}

export default Header;