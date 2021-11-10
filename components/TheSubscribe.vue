<template>
    <div class="subscribe">
        <div class="container">
            <div class="box">
                <h3>Subscribe to our mailing list to get the new updates!</h3>
                <div class="input-box">
                    <label>Enter your email</label>
                    <input type="email" name="subscribe" />
                    <button type="button">SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TheSubscribe',
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable';
.subscribe {
    width: 100%;
    transform: translateY(32px);
    .box {
        width: 100%;
        padding: 48px 24px;
        background-color: map-get($color, main);
        @include media(768) {
            padding: 48px 12px;
        }
    }
    h3 {
        color: #fff;
        margin: 0 0 32px;
        text-align: center;
        font-size: 2.5rem;
    }
    .input-box {
        display: flex;
        justify-content: center;
        @include media(768) {
            flex-wrap: wrap;
        }
        label {
            font-size: 1.4rem;
            color: #fff;
            padding-right: 12px;
            align-self: center;
            @include media(768) {
                flex-basis: 100%;
                text-align: center;
                margin-bottom: 12px;
            }
        }
        input {
            padding: 12px 8px;
            margin-right: 12px;
            font-size: 1.6rem;
            border: 0;
            border-radius: 4px;
            outline: none;
            flex-basis: 30%;
            @include media(768) {
                flex-basis: 100%;
                margin-bottom: 12px;
            }
        }
        button {
            border: 0;
            border-radius: 4px;
            background-color: #000;
            color: #fff;
            font-weight: 600;
            font-size: 1.4rem;
            padding: 12px 24px;
            cursor: pointer;
        }
    }
}
</style>
