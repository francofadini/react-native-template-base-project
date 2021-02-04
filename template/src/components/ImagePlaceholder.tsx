import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';
import { imagePlaceholder } from 'assets';
import colors from 'constants/colors';

interface ImagePlaceholderComponentProps {
  style: any;
  placeholder?: string;
  source: Source;
}

interface ImagePlaceholderComponentState {
  isLoading: boolean;
  isLoaded: boolean;
  failLoading: boolean;
}

export class ImagePlaceholder extends React.Component<
  ImagePlaceholderComponentProps,
  ImagePlaceholderComponentState
> {
  static defaultProps = {
    placeholder: imagePlaceholder,
  };

  constructor(props: ImagePlaceholderComponentProps) {
    super(props);
    this.state = {
      isLoading: false,
      isLoaded: false,
      failLoading: false,
    };
  }

  private startLoading = () => {
    this.setState({ isLoading: true, isLoaded: false, failLoading: false });
  };

  private endLoading = () => {
    this.setState({ isLoading: false });
  };

  private endLoadingSuccess = () => {
    this.setState({ isLoaded: true });
  };

  private endLoadingWithError = () => {
    this.setState({ isLoading: false, failLoading: true });
  };

  render() {
    const { source, style, ...restProps } = this.props;
    const showPlaceHolder = !this.state.isLoaded;
    const showLoader = this.state.isLoading;

    const image = (
      <FastImage
        {...restProps}
        source={source}
        style={{ ...style }}
        onLoadEnd={this.endLoading}
        onLoadStart={this.startLoading}
        onLoad={this.endLoadingSuccess}
        onError={this.endLoadingWithError}
      />
    );

    const imagePlaceholderComponent = (
      <FastImage
        {...restProps}
        style={{ ...style, ...styles.loader }}
        source={imagePlaceholder}
      />
    );

    const loader = (
      <ActivityIndicator style={styles.loader} color={colors.grayDark} />
    );

    return (
      <View>
        {image}
        {showPlaceHolder ? imagePlaceholderComponent : null}
        {showLoader ? loader : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    position: 'absolute',
  },
});
