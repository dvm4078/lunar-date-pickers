import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

class Day extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    current: PropTypes.bool,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    selected: PropTypes.bool,
  }

  static defaultProps = {
    disabled: false,
    hidden: false,
    current: false,
    selected: false,
  }

  render() {
    const {
      children, classes, disabled, hidden, lunar, current, selected, ...other
    } = this.props;

    const className = classnames(classes.day, {
      [classes.hidden]: hidden,
      [classes.current]: current,
      [classes.selected]: selected,
      [classes.disabled]: disabled,
    });
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          fontFamily: 'monospace',
        }}
        className={className}
        tabIndex={hidden || disabled ? -1 : 0}
        {...other}
      >
        <div style={{ fontSize: 16, fontWeight: 900 }}>
          {lunar.day === 1 ? `${lunar.day}/${lunar.month === 1 ? `${lunar.month}N` : lunar.month}` : lunar.day}
        </div>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: '0 2px',
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
  },
  // hidden: {
  //   opacity: 0,
  //   pointerEvents: 'none',
  // },
  current: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  selected: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  disabled: {
    pointerEvents: 'none',
    color: theme.palette.text.hint,
  },
});

export default withStyles(styles, { name: 'MuiPickersDay' })(Day);
